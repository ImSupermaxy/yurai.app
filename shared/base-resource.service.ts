import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { BaseResourceModel } from "./base-resource.model";

export abstract class BaseResourceService<TModel extends BaseResourceModel> {

    private baseKeyStorage: string = "yurai-app@";

    constructor (protected storage_key: string, data: TModel[]) {
        this.initializeStorage(data);
    }

    protected getKeyStorage(): string {
        return `${this.baseKeyStorage}${this.storage_key}`;
    }

    public async get(): Promise<TModel[]> {
        const storage = await useAsyncStorage(this.getKeyStorage()).getItem();
    
        const response: TModel[] = storage ? JSON.parse(storage) : [];
    
        return response;
    }
    
    public async save(model: TModel) {
        try {
            const storage = await this.get();
            const updated = [...storage, model];
    
            await useAsyncStorage(this.getKeyStorage()).setItem(JSON.stringify(updated));
            return true;
        }
        catch (error) {
           return false;
        }
    }
    
    public async remove(id: number) {
        try {
            const storage = await this.get();
    
            if (storage.findIndex(s => s.id === id) < 0)
                return false;
    
            const removed = storage.filter(s => s.id !== id);
    
            await useAsyncStorage(this.getKeyStorage()).setItem(JSON.stringify(removed));

            return true;
        }
        catch (error) {
            console.log(error)
            return false;
        }
    }

    protected async initializeStorage(data: TModel[]) {
        try {    
            await useAsyncStorage(this.getKeyStorage()).setItem(JSON.stringify(data));
            return true;
        }
        catch {

        }
    }

}