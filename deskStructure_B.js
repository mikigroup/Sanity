function generateYearMenu(S, year) {
  const months = [
    { title: "Leden", start: `${year - 1}-12-31`, end: `${year}-02-01` },
    { title: "Únor", start: `${year}-01-31`, end: `${year}-03-01` },
    { title: "Březen", start: `${year}-02-28`, end: `${year}-04-01` },
    { title: "Duben", start: `${year}-03-31`, end: `${year}-05-01` },
    { title: "Květen", start: `${year}-04-30`, end: `${year}-06-01` },
    { title: "Červen", start: `${year}-05-31`, end: `${year}-07-01` },
    { title: "Červenec", start: `${year}-06-30`, end: `${year}-08-01` },
    { title: "Srpen", start: `${year}-07-31`, end: `${year}-09-01` },
    { title: "Září", start: `${year}-08-31`, end: `${year}-10-01` },
    { title: "Říjen", start: `${year}-09-30`, end: `${year}-11-01` },
    { title: "Listopad", start: `${year}-10-31`, end: `${year}-12-01` },
    { title: "Prosinec", start: `${year}-11-30`, end: `${year + 1}-01-01` },
  ];

  return months.map((month) =>
    S.listItem()
      .title(month.title)
      .schemaType("menu")
      .child((datefilter) =>
        S.documentTypeList("menu")
          .title(`Meníčka ${month.title}`)
          .filter(
            `_type == "menu" && releaseDate > "${month.start}" && releaseDate < "${month.end}"`
          )
          .params({ datefilter })
      )
  );
}
