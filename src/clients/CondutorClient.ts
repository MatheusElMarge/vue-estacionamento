import axios, { AxiosInstance } from "axios";

import { Condutor } from "../assets/models/Condutor";

 class CondutorClient {

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
            return (await this.axiosClient.get<Condutor[]>(`/listar`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivo() : Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/listarPorAtivo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor : Condutor) : Promise<void> {
        try {
            return (await this.axiosClient.post('/cadastrar', condutor))
        } catch (error : any) {
            return Promise.reject(error.response)
        }

    }
    public async editar( id: number, condutor : Condutor) : Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/editar/${id}`, condutor)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number) : Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

}
export default new CondutorClient();