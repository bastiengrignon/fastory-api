import axios from 'axios'

export class SwapiService {
    static baseUrl = "https://swapi.dev/api"

    public static async getObject(type: string, id: number): Promise<void> {
        return await axios.get(`${ this.baseUrl }/${ type }/${ id }`).then(r => r.data)
    }

    public static async searchPeople(string: string): Promise<any[]> {
        return await axios.get(`${ this.baseUrl }/people/?search=${ string }`).then(r => r.data['results'])
    }

    public static async searchPlanets(string: string): Promise<[]> {
        return await axios.get(`${ this.baseUrl }/planets/?search=${ string }`).then(r => r.data['results'])
    }

    public static async searchFilms(string: string): Promise<[]> {
        return await axios.get(`${ this.baseUrl }/films/?search=${ string }`).then(r => r.data['results'])
    }

    public static async searchSpecies(string: string): Promise<[]> {
        return await axios.get(`${ this.baseUrl }/species/?search=${ string }`).then(r => r.data['results'])
    }

    public static async searchVehicles(string: string): Promise<[]> {
        return await axios.get(`${ this.baseUrl }/vehicles/?search=${ string }`).then(r => r.data['results'])
    }

    public static async searchStarships(string: string): Promise<[]> {
        return await axios.get(`${ this.baseUrl }/starships/?search=${ string }`).then(r => r.data['results'])
    }
}