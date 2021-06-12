import React from "react";

export default function Tuazon() {
  const employees = [
    {
      name: "Anthony",
      gender: "Male",
      salary: "$10",
      address: {
        salary: "120,000",
        street: "210 Washington street",
        country: "Canada",
        province: "Ontario",
        zone: {
          plantZone: "89",
          alienZone: "41",
        },
      },
    },
    {
      name: "Jelson",
      salary: "$5",
      gender: "Female",
      address: {
        salary: "30,000",
        street: "squater area",
        country: "Africa",
        province: "makati",
        zone: {
          plantZone: "3",
          alienZone: "yes",
        },
      },
    },
    {
      name: "Vincent",
      gender: "Male",
      salary: "$30",
      address: {
        salary: "180,000",
        street: "220, adobong baboy st.",
        country: "Russia",
        province: "Batanes",
        zone: {
          plantZone: "madami",
          alienZone: "nope",
        },
      },
    },
  ];

  const bosses = [
    {
      name: "ellaine",
      role: "CEO",
    },
    {
      name: "khey",
      role: "SEC",
    },
    {
      name: "Aiza",
      role: "Manager",
    },
  ];
  const allEmployee = [...bosses, ...employees];
  console.log(allEmployee);

  return <div></div>;
}
