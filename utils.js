var config = require('./config');

exports.getRandomValue = function(tot_arr, received) {
    if(received != ""){
        var curr_arr = JSON.parse(received);
        var diff = tot_arr.filter(x => !curr_arr.includes(x));
        var variation = diff[Math.floor(Math.random() * diff.length)];
        return variation;
    }
    else{
        var variation = tot_arr[Math.floor(Math.random() * tot_arr.length)];
        return variation;
    }
}


exports.processCost = function(low) {
    if(low){
        var adj_cost = Math.floor(config.cost * (Math.random() * (0.95 - 0.7) + 0.7));
        return Math.round(adj_cost/10)*10;
    }
    else{
        var adj_cost = Math.floor(config.cost * (Math.random() * (1.5 - 1.1) + 1.1));
        return Math.round(adj_cost/10)*10;
    }
}


exports.processTime = function(variation) {
    var u_comps = config.arrival.split(":");
    var upper = (parseInt(u_comps[1]) + variation).toString();
    if(upper.length == 1){
        u_comps[1] = "0" + upper;
    }
    else{
        u_comps[1] = upper;
    }

    var l_comps = config.arrival.split(":");
    l_comps[1] = (60 - variation).toString();
    l_comps[0] = (parseInt(l_comps[0]) - 1).toString();

    return [l_comps.join(":"), u_comps.join(":")]
}