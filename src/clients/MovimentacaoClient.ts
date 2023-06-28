import axios, { AxiosInstance } from "axios";
import { Movimentacao } from "../assets/models/Movimentacao";


 class MovimentacaoClient {

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/listar`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAbertas() : Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(movimentacao : Movimentacao) : Promise<string> {
        try { 
            return (await this.axiosClient.post<string>('/cadastrar', movimentacao)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(id:number, movimentacao : Movimentacao) : Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/editar/${id}`, movimentacao)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async fecharMovimentacao(id:number, movimentacao : Movimentacao) : Promise<string> {
        try { 
            return (await this.axiosClient.put<string>(`/marcarfim/${id}`, movimentacao)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id:number) : Promise<string> {
        try {
            return (await this.axiosClient.delete(`/desativar/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    
}
export default new MovimentacaoClient();