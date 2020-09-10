import { Database } from "./database.ts";
import { CommandType } from "./types.ts";
import { dispatch, dispatchAsync, encode } from "./util.ts";
export class MongoClient {
    constructor() {
        this._clientId = 0;
    }
    get clientId() {
        return this._clientId;
    }
    connectWithUri(uri) {
        const data = dispatch({ command_type: CommandType.ConnectWithUri }, encode(uri));
        this._clientId = data.clientId;
    }
    connectWithOptions(options) {
        const data = dispatch({ command_type: CommandType.ConnectWithOptions }, encode(JSON.stringify(options)));
        this._clientId = data.clientId;
    }
    async listDatabases() {
        return (await dispatchAsync({
            command_type: CommandType.ListDatabases,
            client_id: this._clientId,
        }));
    }
    close() {
        return dispatch({
            command_type: CommandType.Close,
            client_id: this._clientId,
        });
    }
    database(name) {
        return new Database(this, name);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUEwRjVELE1BQU0sT0FBTyxXQUFXO0lBQXhCO1FBQ1UsY0FBUyxHQUFXLENBQUMsQ0FBQztJQXlDaEMsQ0FBQztJQXZDQyxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFXO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FDbkIsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ0ssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELGtCQUFrQixDQUFDLE9BQXNCO1FBQ3ZDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FDbkIsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDLGtCQUFrQixFQUFFLEVBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ2YsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhO1FBQ2pCLE9BQU8sQ0FBQyxNQUFNLGFBQWEsQ0FBQztZQUMxQixZQUFZLEVBQUUsV0FBVyxDQUFDLGFBQWE7WUFDdkMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBYSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxLQUFLO1FBQ0gsT0FBTyxRQUFRLENBQUM7WUFDZCxZQUFZLEVBQUUsV0FBVyxDQUFDLEtBQUs7WUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBRUEsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNuQixPQUFPLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0YifQ==