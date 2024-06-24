export default class ConfigService {
    public static async isConfigured(): Promise<boolean> {
        try {
            const response = await fetch("/config.json");
            return response.ok;
        } catch (error) {
            console.log('Could not find a configuration, creating a new one and starting a new project');
            return false;
        }
    }
}