function twiceAsOld(dadYearsOld, sonYearsOld) {
    let dif = dadYearsOld - sonYearsOld;
    if (dif - sonYearsOld < 0){
        return sonYearsOld - dif;
    }else{
        return dif - sonYearsOld;
    }
}