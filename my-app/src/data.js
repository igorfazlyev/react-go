const data = {
  people: [
    {
      id: 1,
      firstName: "Mary",
      lastName: "Jones",
      dob: "1997-05-02",
    },
    {
      id: 2,
      firstName: "Jack",
      lastName: "Smith",
      dob: "1999-02-04",
    },
  ],
  getData: async function () {
    return this.people;
  },
};

export default data;
