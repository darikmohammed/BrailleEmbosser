class convertTOBitsArray{
    constructor(printingData){
        this.printingData = printingData;

    }

    convertingPrintingData(){
        return printingData.split('');    
    }

    EnglishAlphabetConvertor(alphabet){
        switch (alphabet){
            case 'a' : 
                value = [1,0,0,0,0,0]; 
                break; 
            case 'b' : 
                value = [1,1,0,0,0,0]; 
                break;
            case 'c' : 
                value = [1,0,0,1,0,0]; 
                break; 
            case 'd' : 
                value = [1,0,0,1,1,0]; 
                break;
            case 'e' : 
                value = [1,0,0,0,1,0]; 
                break;
            case 'f' : 
                value = [1,1,0,1,0,0]; 
                break;
            case 'g' : 
                value = [1,1,0,1,1,0]; 
                break; 
            case 'h' : 
                value = [1,1,0,0,1,0]; 
                break;
            case 'i' : 
                value = [0,1,0,1,0,0]; 
                break; 
            case 'j' : 
                value = [0,1,0,1,1,0]; 
                break;
            case 'k' : 
                value = [1,0,1,0,0,0]; 
                break; 
            case 'l' : 
                value = [1,1,1,0,0,0]; 
                break;
            case 'm' : 
                value = [1,0,1,1,0,0]; 
                break; 
            case 'n' : 
                value = [1,0,1,1,1,0]; 
                break;
            case 'o' : 
                value = [1,0,1,0,1,0]; 
                break; 
            case 'p' : 
                value = [1,1,1,1,0,0]; 
                break;
            case 'q' : 
                value = [1,1,1,1,1,0]; 
                break; 
            case 'r' : 
                value = [1,1,1,0,1,0]; 
                break;
            case 's' : 
                value = [0,1,1,1,0,0]; 
                break; 
            case 't' : 
                value = [0,1,1,1,1,0]; 
                break;
            case 'u' : 
                value = [1,0,1,0,0,1]; 
                break; 
            case 'v' : 
                value = [1,1,1,0,0,1]; 
                break;
            case 'w' : 
                value = [0,1,0,1,1,1]; 
                break; 
            case 'x' : 
                value = [1,0,1,1,0,1]; 
                break;
            case 'y' : 
                value = [1,0,1,1,1,1]; 
                break; 
            case 'z' : 
                value = [1,0,1,0,1,1]; 
                break;
            case 'ä' : 
                value = [0,1,0,0,0,1]; 
            default : 
                value = null; 
                break; 
        }
        return value; 
    }

    AmharicAlphabetConvertor(alphabet){
        switch (alphabet){
            case 'ሀ' : // hä
                value1 = EnglishAlphabetConvertor(h);
                value2 = EnglishAlphabetConvertor(ä);
                break; 
            
            default : 
                value1= value2 = null; 
                break; 
        }
        return [...value1, ...value2 ] ; 
    }

    CharacterConvertor(alphabet){
        switch (alphabet){
            case '.' : 
                value = [0,1,0,0,1,1]; 
                break; 
            case ',' : 
                value = [0,1,0,0,0,0]; 
                break;
            case '@' : 
                value = [0,0,1,1,1,0]; 
                break; 
            case '#' : 
                value = [0,0,1,1,1,1]; 
                break;
            case ';' : 
                value = [0,1,1,0,0,0]; 
                break;
            case ':' : 
                value = [0,1,0,0,1,0]; 
                break;
            case '+' : 
                value = [0,1,1,0,1,0]; 
                break; 
            case '-' : 
                value = [0,1,0,0,1,0]; 
                break;
            case '*' : 
                value = [0,0,1,0,1,0]; 
                break; 
            case '?' : 
                value = [0,1,1,0,0,1]; 
                break;
            case '/' : 
                value = [0,0,1,1,0,0]; 
                break; 
            case '<' : 
                value = [1,1,0,0,0,1]; 
                break;
            case '\'' : 
                value = [0,0,1,0,0,0]; 
                break; 
            case '>' : 
                value = [0,0,1,1,1,0]; 
                break;
            case ')' : 
                value = [0,1,1,0,1,1]; 
                break;
            case '(' : 
                value = [0,1,1,0,1,1]; 
                break; 
            default : 
                value = null; 
                break; 
        }
        return value; 
    }

    NumberConvertor(alphabet){
        switch (alphabet){
        case '1' : 
            value = [1,0,0,0,0,0]; 
            break; 
        case '2' : 
            value = [1,1,0,0,0,0]; 
            break;
        case '3' : 
            value = [1,0,0,1,0,0]; 
            break; 
        case '4' : 
            value = [1,0,0,1,1,0]; 
            break;
        case '5' : 
            value = [1,0,0,0,1,0]; 
            break;
        case '6' : 
            value = [1,1,0,1,0,0]; 
            break;
        case '7' : 
            value = [1,1,0,1,1,0]; 
            break;
        case '8' : 
            value = [1,1,0,0,1,0]; 
            break;
        case '9' : 
            value = [0,1,0,1,0,0]; 
            break; 
        case '0' : 
            value = [0,1,0,1,1,0]; 
            break;    
        default : 
                value = null; 
                break; 
        }
        return value; 
    }

}