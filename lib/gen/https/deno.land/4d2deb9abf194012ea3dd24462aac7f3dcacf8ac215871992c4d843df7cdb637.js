export var CommandType;
(function (CommandType) {
    CommandType["ConnectWithUri"] = "ConnectWithUri";
    CommandType["ConnectWithOptions"] = "ConnectWithOptions";
    CommandType["Close"] = "Close";
    CommandType["ListDatabases"] = "ListDatabases";
    CommandType["ListCollectionNames"] = "ListCollectionNames";
    CommandType["Find"] = "Find";
    CommandType["InsertOne"] = "InsertOne";
    CommandType["InsertMany"] = "InsertMany";
    CommandType["Delete"] = "Delete";
    CommandType["Update"] = "Update";
    CommandType["Aggregate"] = "Aggregate";
    CommandType["Count"] = "Count";
    CommandType["CreateIndexes"] = "CreateIndexes";
    CommandType["Distinct"] = "Distinct";
})(CommandType || (CommandType = {}));
export function ObjectId($oid) {
    const isLegal = /^[0-9a-fA-F]{24}$/.test($oid);
    if (!isLegal) {
        throw new Error(`ObjectId("${$oid}") is not legal.`);
    }
    return { $oid };
}
export class ChainBuilderPromise {
    #promise;
    getPromise() {
        if (!this.#promise) {
            this.#promise = this._excutor();
        }
        return this.#promise;
    }
    async then(callback) {
        return this.getPromise().then(callback);
    }
    async catch(callback) {
        return this.getPromise().catch(callback);
    }
    async finally(callback) {
        return this.getPromise().finally(callback);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQU4sSUFBWSxXQWVYO0FBZkQsV0FBWSxXQUFXO0lBQ3JCLGdEQUFpQyxDQUFBO0lBQ2pDLHdEQUF5QyxDQUFBO0lBQ3pDLDhCQUFlLENBQUE7SUFDZiw4Q0FBK0IsQ0FBQTtJQUMvQiwwREFBMkMsQ0FBQTtJQUMzQyw0QkFBYSxDQUFBO0lBQ2Isc0NBQXVCLENBQUE7SUFDdkIsd0NBQXlCLENBQUE7SUFDekIsZ0NBQWlCLENBQUE7SUFDakIsZ0NBQWlCLENBQUE7SUFDakIsc0NBQXVCLENBQUE7SUFDdkIsOEJBQWUsQ0FBQTtJQUNmLDhDQUErQixDQUFBO0lBQy9CLG9DQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFmVyxXQUFXLEtBQVgsV0FBVyxRQWV0QjtBQUtELE1BQU0sVUFBVSxRQUFRLENBQUMsSUFBWTtJQUNuQyxNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLGtCQUFrQixDQUFDLENBQUM7S0FDdEQ7SUFDRCxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDbEIsQ0FBQztBQWNELE1BQU0sT0FBZ0IsbUJBQW1CO0lBQ3ZDLFFBQVEsQ0FBYztJQUlkLFVBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2YsUUFBa0U7UUFFbEUsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSyxDQUNoQixRQUFrRTtRQUVsRSxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBcUI7UUFDeEMsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRiJ9