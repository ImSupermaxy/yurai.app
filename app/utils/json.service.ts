const DEFAULT_DATA_PATH = "./assets/data/";

// usePath = Irá atribuir o "otherPath" no lugar no defaultPath / completePath
// completePath = será concatenado ao defaultPath em um novo caminho
// fileName = será concatenado ao final de qualquer caminho desejado (a extensão .json é implícita)
async function get<T>(fileName: string, completePath = "", useDefaultPath = true, otherPath = ""): Promise<T | undefined> {
    try 
    {
        const { path, success } = createPath(fileName, completePath, useDefaultPath, otherPath);
        if (!success)
            return undefined;

        console.log(path);

        const response = await fetch(path);
        console.log(response);
        const json = await response.json();
        const result: T = JSON.parse(json);
        return result;

    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

function createPath(fileName: string, completePath = "", useDefaultPath = true, otherPath = ""): { path: string, success: boolean } {
    try
    {
        if (useDefaultPath === false)
        {
            const path = otherPath + "/" + fileName + ".json";
            return { path, success: true };
        }
        
        if (!completePath.endsWith('/'))
            completePath = completePath + "/"

        const path = DEFAULT_DATA_PATH + completePath + fileName + ".json";
        return { path, success: true };
    }
    catch (error)
    {
        console.error("Erro ao buscar dados:", error);
        return { path: "", success: false };
    }
}

export const jsonService = { get, createPath };