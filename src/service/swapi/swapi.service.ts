import axios from 'axios'

export class SwapiService {
    private static baseUrl = "https://swapi.dev/api"

    public static async getObject(type: string, id: number): Promise<void> {
        return await axios.get(`${ this.baseUrl }/${ type }/${ id }`).then(r => r.data)
    }

    public static async searchPeople(term: string): Promise<any[]> {
        return await this.globalSearch('people', term)
    }

    public static async searchPlanets(term: string): Promise<any[]> {
        return await this.globalSearch('planets', term)
    }

    public static async searchFilms(term: string): Promise<any[]> {
        return await this.globalSearch('films', term)
    }

    public static async searchSpecies(term: string): Promise<any[]> {
        return await this.globalSearch('species', term)
    }

    public static async searchVehicles(term: string): Promise<any[]> {
        return await this.globalSearch('vehicles', term)
    }

    public static async searchStarships(term: string): Promise<any[]> {
        return await this.globalSearch('starships', term)
    }

    private static globalSearch = async (searchType: string, term: string): Promise<any[]> => {
        return await axios.get(`${ this.baseUrl }/${ searchType }/?search=${ term }`).then(r => r.data['results'])
    }
}