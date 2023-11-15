using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    public class KievTmpRepository : IKievTmpRepository
    {
        private readonly IDataContext _context;
        private readonly IWebHostEnvironment _environment;

        public KievTmpRepository(IDataContext context, IWebHostEnvironment _environment)
        {
            this._context = context;
            this._environment = _environment;
        }

        public async Task<IEnumerable<KievTmp>> GetAll()
        {
            //_context.KievPoints.RemoveRange(_context.KievPoints.ToList());
            //_context.SaveChanges();
            SaveData();
            return await _context.KievPoints.ToListAsync();
        }

        public void SaveData()
        {
            //check it the table is empty before we load the data, else skip the etract trancsform and load process
            
           var res_dataset = _context.KievPoints.ToList();

            if (res_dataset.Count == 0)
            {
                Console.WriteLine("No Data");

                var geoJson = File.ReadAllText(Path.Combine(this._environment.ContentRootPath, "kievTmp.geojson"));
                dynamic jsonObj = JsonConvert.DeserializeObject(geoJson);

                foreach (var feature in jsonObj["features"])
                {
                    string str_geometry = feature["geometry"]["coordinates"].ToString(Formatting.None);
                    string color = feature["properties"]["color"].ToString(Formatting.None);

                    // Load the data into our table
                    KievTmp points = new()
                    {
                        Coordinates = str_geometry,
                        Color = color
                    };

                    _context.KievPoints.Add(points);
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
