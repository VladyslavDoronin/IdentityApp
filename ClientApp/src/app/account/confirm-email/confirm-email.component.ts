import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { SharedService } from 'src/app/shared/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/account/user';
import { take } from 'rxjs';
import { ConfirmEmail } from 'src/app/shared/models/account/confirmEmail';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit{

  success = true;
  constructor(private accountService:AccountService,
    private sharesService: SharedService,
    private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.accountService.user$.pipe(take(1)).subscribe({
      next: (user: User|null) => {
        if(user){
          this.router.navigateByUrl('/');
        }else{
          this.activatedRoute.queryParamMap.subscribe({
            next: (params: any)=> {
              const сonfirmEmail: ConfirmEmail ={
                token: params.get('token'),
                email: params.get('email')
              }

              this.accountService.confirmEmail(сonfirmEmail).subscribe({
                next: (response: any) =>{
                  this.sharesService.showNotification(true, response.value.title, response.value.message);
                }, error: error=>{
                  this.success = false;
                  this.sharesService.showNotification(false, "Failed", error.error);
              }
              })
            }
          })
        }
      }
    })
  }

  resendEmailConfirmationLink(){
    this.router.navigateByUrl('/account/send-email/resend-email-confirmation-link');
  }


}
