import Head from "next/head";
import { useState } from "react";

import { Grid } from "components/Grid";

import { data, Data } from 'types/data';

export default function Home() {
  const [householdData, setHouseholdData] = useState<Data[]>(data);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6 space-y-3">
        <h2 className="text-left font-medium text-base tracking-[-0.02em] text-primary">Household</h2>
        <Grid data={householdData} updateCovered={updateCovered} updateSubscriber={updateSubscriber} updateInsuranceType={updateInsuranceType} updateInsuranceId={updateInsuranceId} addNewMember={addNewMember} />
      </main>
    </>
  );

  function updateCovered(id: number, isCovered: boolean) {
    setHouseholdData((prevData) => prevData.map((obj) => {
      if (id !== obj.id) return obj
      return { ...obj, covered: isCovered }
    }))
  }

  function updateSubscriber(id: number) {
    setHouseholdData((prevData) => prevData.map((obj) => {
      if (id !== obj.id) return { ...obj, is_subscriber: false }
      return { ...obj, is_subscriber: true }
    }))
  }

  function updateInsuranceType(id: number, insuranceType: Data['insurance']) {
    setHouseholdData((prevData) => prevData.map((obj) => {
      if (id !== obj.id) return obj
      return { ...obj, insurance: insuranceType }
    }))
  }

  function updateInsuranceId(id: number, insuranceId: Data['insurance_id']) {
    setHouseholdData((prevData) => prevData.map((obj) => {
      if (id !== obj.id) return obj
      return { ...obj, insurance_id: insuranceId }
    }))
  }

  function addNewMember() {
    const newMember: Data = {
      id: householdData[householdData.length - 1].id + 1,
      covered: false,
      first_name: "",
      last_name: "",
      preferred_name: "",
      is_subscriber: false,
      insurance: null,
      insurance_id: null,
    };

    setHouseholdData((prevData) => [...prevData, newMember])
  }
}
