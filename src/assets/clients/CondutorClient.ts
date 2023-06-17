import axios, { AxiosInstance } from "axios";

import { Condutor } from "../models/Condutor";

export class CondutorClient {

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivo() : Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor : Condutor) : Promise<void> {
        try {
            return (await this.axiosClient.post('/', condutor))
        } catch (error : any) {
            return Promise.reject(error.response)
        }

    }



}