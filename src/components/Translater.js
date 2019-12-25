module.exports = {
    translate: function(text_of_condition){
        switch (text_of_condition) {
            case "test":
                return "yes";
                break;

            case "snow":
                return "Идет снег";
                break;
        
            default:
                return "unknown";
                break;
        }
    }
}