"use server"

import {defineOneEntry} from 'oneentry'
import type { IError } from 'oneentry/dist/base/utils'

import retrieveRefreshToken from '@/action/auth/retrieveRefreshToken'
import { storeRefreshToken } from '@/action/auth/storeRefreshToken'
import { error } from 'console'

export type ApiClientType = ReturnType<typeof defineOneEntry>|null;

let apiClient: ApiClientType = null;


async function setupApiClient(): Promise<ReturnType<typeof defineOneEntry>> {
  const apiUrl = process.env.ONEENTRY_PROJECT_URL;
if(!apiUrl) throw new Error('ONEENTRY_PROJECT_URL is missing');

if(!apiClient){
  try{
const refreshToken = await retrieveRefreshToken()

apiClient = defineOneEntry(apiUrl,{
  token: process.env.ONENETRY_TOKEN,
  langCode:"en_US",
  auth:{
    refreshToken:refreshToken||undefined,
    customAuth:false,
    saveFunction: async(newToken:string)=>{
      await storeRefreshToken(newToken)
    },
  },
 errors: {
    isShell: false,
    customErrors: {
      400: (error?: IError) => console.error("Bad Request:",error?.message || "Unknown error"),
      404: (error?:IError) => console.error("Not Found:",error?.message ||"Unknown error"),
      500: (error?: IError) => console.error("Server Error",error?.message || "Unknown error"),
    },
  },
})
  }catch(error)
  {
    console.error("Error setting up API client:",error);
  }
}
if  (!apiClient) throw new Error('Failed to initalize API client');
return apiClient;
}
export async function fetchApiClient():Promise<ReturnType<typeof defineOneEntry>>{
if(!apiClient){
  await setupApiClient()
}
if  (!apiClient) throw new Error('API client is still null after setup');

return apiClient
}