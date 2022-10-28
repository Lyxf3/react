import axios, {AxiosError, AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import { useRequest } from "./hooks";

export type DataItem = {
    API: string,
    Description: string,
    Auth: string,
    HTTPS: boolean,
    Cors: string,
    Link: string,
    Category: string
}


export const fetchItems = () => {
    return axios.get("https://api.publicapis.org/entries")
}