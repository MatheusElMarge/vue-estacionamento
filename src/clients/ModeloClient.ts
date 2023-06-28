import axios, { AxiosInstance } from "axios";

import { Modelo } from "../assets/models/Modelo";
 class ModeloClient { 

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Modelo> { 
        try {
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/listar`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivo() : Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo : Modelo) : Promise<string> {
        try {
            return (await this.axiosClient.post<string>('/cadastrar', modelo)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(id:number, modelo : Modelo) : Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/editar/${id}`, modelo)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }
    public async deletar(id: number ) : Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/deletar/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

}
export default new ModeloClient();