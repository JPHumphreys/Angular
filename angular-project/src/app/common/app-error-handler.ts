import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert('An unexpected error has occured.');//use toast notification instead in real apps
        console.log(error);
    }
}