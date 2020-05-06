const mincostTickets = function (days: number[], costs: number[]) {
    const len = 366;
    const mark = new Array<number>(len);
    const cost = new Array<number>(len);
    mark.fill(0);
    cost.fill(len * costs[2]);
    cost[0] = 0;

    days.map(v => mark[v] = 1);

    function updateCost(index: number, value: number) {
        cost[index] = cost[index] > value ? value : cost[index];
    }

    const span = [1, 7, 30];
    for (let i = 1; i < len; ++i) {
        mark[i] = mark[i - 1] + mark[i];

        for (let j = 0; j < span.length; ++j) {
            const s = span[j];
            if (s <= i) {
                if (mark[i] === mark[i - s]) {
                    updateCost(i, cost[i - s]);
                } else {
                    updateCost(i, cost[i - s] + costs[j]);
                }
            }
        }
    }

    return cost[len - 1];
};

{
    const days =[1,2,3,4,5,6,7,8,9,10,30,31];
    const costs = [2, 7, 15];
    console.log(mincostTickets(days, costs));
}
