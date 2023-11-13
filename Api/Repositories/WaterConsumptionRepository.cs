using Api.Data;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace Api.Repositories
{
    public class WaterConsumptionRepository : IWaterConsumptionRepository
    {
        private readonly DataContext _context;
        private readonly IWebHostEnvironment _environment;

        public WaterConsumptionRepository(DataContext context, IWebHostEnvironment _environment)
        {
            _context = context;
            this._environment = _environment;
        }

        public async Task<IEnumerable<WaterConsumption>> GetAll()
        {
            SaveData();
            return await _context.Consumptions.ToListAsync();
        }

        public async Task<IEnumerable<WaterConsumption>> GetTopTenConsumpers()
        {
            var query = _context.Consumptions
                .OrderByDescending(avdKL => avdKL.averageMonthlyKL)
                .Take(10)
                .ToListAsync();
            return await query;
        }

        public void SaveData()
        {
            //check it the table is empty before we load the data, else skip the etract trancsform and load process
            var res_dataset = _context.Consumptions.ToList();

            if (res_dataset.Count == 0)
            {
                Console.WriteLine("No Data");

                var geoJson = File.ReadAllText(Path.Combine(this._environment.ContentRootPath, "water_consumption.geojson"));
                dynamic jsonObj = JsonConvert.DeserializeObject(geoJson);

                foreach (var feature in jsonObj["features"])
                {
                    string str_neighbourhood = feature["properties"]["neighbourhood"];
                    string str_suburb_group = feature["properties"]["suburb_group"];
                    string str_avgMonthlyKL = feature["properties"]["averageMonthlyKL"];
                    string str_geometry = feature["geometry"]["coordinates"].ToString(Formatting.None);

                    //Apply Transfoming

                    string conv_avgMthlyKl = str_avgMonthlyKL.Replace(".0", "");
                    int avgMthkyKl = Convert.ToInt32(conv_avgMthlyKl);

                    // Load the data into our table
                    WaterConsumption wc = new()
                    {
                        Neighbourhood = str_neighbourhood,
                        Suburb_group = str_suburb_group,
                        averageMonthlyKL = avgMthkyKl,
                        Coordinates = str_geometry
                    };

                    _context.Consumptions.Add(wc);
                    _context.SaveChanges();
                }
            }
            else
            {
                Console.WriteLine("Already Loaded");
            }
        }
    }
}
