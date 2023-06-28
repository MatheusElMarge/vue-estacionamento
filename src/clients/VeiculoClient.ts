import axios, { AxiosInstance } from "axios";
import { Veiculo } from "../assets/models/Veiculo";
import { Movimentacao } from "../assets/models/Movimentacao";

class VeiculoClient {

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
            return (await this.axiosClient.get<Veiculo[]>(`/listar`)).data
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

    public async cadastrar(veiculo : Veiculo) : Promise<string> {
        try {
            return (await this.axiosClient.post<string>('/cadastrar', veiculo)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(id:number, veiculo : Veiculo) : Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/editar/${id}`, veiculo)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id:number) : Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/deletar/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

}
export default new VeiculoClient();