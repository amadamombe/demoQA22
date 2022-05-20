export default class LogUtils {

    public static log(text: string): void{
        console.log(text);
    }

    public static logAddedUserDetails (name: string, surname: string) {
        this.log(`Entered ${name} and ${surname} into text boxes`);
    }
}