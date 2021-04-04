function superbowlWin(winLossRecord) {
    const superBowlRecord = winLossRecord.find(superBowl => superBowl.result == "W")
    if (superBowlRecord === undefined){
        return superBowlRecord;
    }
    else {
        return superBowlRecord.year;
    }
}
