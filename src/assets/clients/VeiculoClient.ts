import axios, { AxiosInstance } from "axios";
import { Veiculo } from "../models/Veiculo";
import { Movimentacao } from "../models/Movimentacao";

export class VeiculoClient {

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Veiculo> { 
        try {
            return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Veiculo[]> {
        try { 
            return (await this.axiosClient.get<Veiculo[]>(`/lista`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivo() : Promise<Veiculo[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(veiculo : Veiculo) : Promise<void> {
        try {
            return (await this.axiosClient.post('/', veiculo))
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(veiculo : Veiculo) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(veiculo : Veiculo) : Promise<string> {
        try {
            return (await this.axiosClient.delete(`/${veiculo.id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

}