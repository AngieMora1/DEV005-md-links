    //<--- links unicos --->
    const statsUniqueLinks = (links) => {
    const searchUniqueLinks = links.map((element) => element.Href);
    const uniqueLinks = new Set(searchUniqueLinks).size;
    return uniqueLinks;
    };

    //<--- links rotos --->
    const statsBrokenLinks = (links) => {
    const brokenLinks = links.filter(
        (element) => element.Menssage === "FAIL"
    ).length;
    return brokenLinks;
    };
    //<--- objeto con las estadisticas de los links --->
    const statsLinks = (links) => {
    const stats = {
        Total: links.length,
        Unique: statsUniqueLinks(links),
        Broken: statsBrokenLinks(links),
    };
    return stats;
    };

    module.exports = { statsLinks, statsUniqueLinks, statsBrokenLinks };
