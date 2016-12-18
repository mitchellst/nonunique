module.exports = nonunique;

function nonunique(collection, bool=false, sc=false, uniqBy){    
    var out = [], c = new Set();

    for(val of collection){
        let v = uniqBy ? uniqBy(val) : val,
            offending = c.has(v);
        
        if(offending){
            out.push(v);
            if(bool) { return true;}
            if(sc){ return out; }
        }

        c.add(v);

    }

    return bool ? false : out;
}
