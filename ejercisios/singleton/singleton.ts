class singleton {
    private static instance: any = singleton;

    private contructor(){

    }

    static getInstance(){
        if(!singleton.instance){
            singleton.instance = new singleton();
        }

        return singleton.instance;

    }
};

export default singleton;