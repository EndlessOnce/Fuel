import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Form } from "src/app/fuel-quote-form/fuel-quote.model";
import { AuthData } from "./auth-data.model";
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private userEmail: string;
  private userPass: string;
  private userState: string;
  private userHistory: string;
  private userAddress: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  getToken()
  {
    return this.token;
  }

  getIsAuth()
  {
    return this.isAuthenticated;
  }

  getAuthStatusListner()
  {
    return this.authStatusListener.asObservable();
  }

  getEmail()
  {
    return this.userEmail;
  }

  setState()
  {

    const authData: AuthData = {email: this.userEmail, password: this.userPass};
    this.http.post<{state: string}>("http://localhost:3000/api/user/setState", authData)
    .subscribe(response => {
      this.userState = response.state;
    });
  }

  getState()
  {
    return this.userState;

  }

  setHistory() {
      const form: Form = {email: this.userEmail, gallons: 0, delivery: new Date(), address: "0", price: "0", total: "0"};
      this.http.post<{email: string}>("http://localhost:3000/api/quote/setHistory", form)
      .subscribe(response => {
        this.userHistory = response.email;
      });
  }

  getHistory()
  {
    if (this.userHistory != null) {
      return true;
    }
    else {
      return false;
    }

  }

  setAddress() {
    const authData: AuthData = {email: this.userEmail, password: this.userPass};
    this.http.post<{address1: string, address2: string}>("http://localhost:3000/api/user/setAddress", authData)
    .subscribe(response => {
      this.userAddress = [response.address1, response.address2];
    });
  }

  getAddress() {
    console.log(this.userAddress);
    return this.userAddress;
  }

  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post("http://localhost:3000/api/user/signup", authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string)
  {
    const authData: AuthData = {email: email, password: password};
    this.http.post<{token: string, expiresIn: number}>("http://localhost:3000/api/user/login", authData)
    .subscribe(response => {
      const token = response.token;
      this.token = token;
      this.userEmail = authData.email;
      this.userPass = authData.password;
      if (token)
      {
        const expiresInDuration = response.expiresIn;
        console.log(expiresInDuration);
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date (now.getTime() + expiresInDuration * 1000);
        console.log(expirationDate);
        this.saveAuthData(token, expirationDate, this.userEmail, this.userPass, this.userAddress);
        this.router.navigate(['/client-profile']);
      }
    });
    this.setState();
    this.setHistory();
    this.setAddress();
  }

  autoAuthUser()
  {
    const authInformation = this.getAuthData();
    if (!authInformation)
    {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0)
    {
      this.token = authInformation.token;
      this.userEmail = authInformation.userEmail;
      this.userPass = authInformation.userPass;
      this.userAddress[0] = authInformation.userAddress1;
      this.userAddress[1] = authInformation.userAddress2;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
    this.setState();
    this.setHistory();
    this.setAddress();
  }

  logout()
  {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  private setAuthTimer(duration: number)
  {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userEmail: string, userPass: string, userAddress: string[])
  {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userPass', userPass);
    localStorage.setItem('userAddress1', userAddress[0]);
    localStorage.setItem('userAddress2', userAddress[1]);
  }

  private clearAuthData()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPass");
    localStorage.removeItem('userAddress1');
    localStorage.removeItem('userAddress2');
  }

  private getAuthData()
  {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userEmail = localStorage.getItem("userEmail");
    const userPass = localStorage.getItem("userPass");
    const userAddress1 = localStorage.getItem("userAddress1");
    const userAddress2 = localStorage.getItem("userAddress2");
    if (!token || !expirationDate || !userEmail || !userPass || !userAddress1 || !userAddress2){
      return;
    }
    return {
      token: token,
      expirationDate: new Date (expirationDate),
      userEmail: userEmail,
      userPass: userPass,
      userAddress1: userAddress1,
      userAddress2: userAddress2
    }
  }

}
