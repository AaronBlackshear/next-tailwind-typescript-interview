import React from 'react'
import { Data } from 'types/data'

const COLUMNS = [
  "Covered",
  "Name",
  "Subscriber",
  "Insurance",
  "ID",
]

type Props = {
  data: Data[];
  updateCovered: (id: number, isCovered: boolean) => void;
  updateSubscriber: (id: number) => void;
  updateInsuranceType: (id: number, insuranceType: Data['insurance']) => void;
  updateInsuranceId: (id: number, insuranceId: Data['insurance_id']) => void;
  addNewMember: () => void;
}

export function Grid({ data, updateCovered, updateSubscriber, updateInsuranceType, updateInsuranceId, addNewMember }: Props) {
  return (
    <div className="space-y-3">
      <section className="grid grid-cols-layout gap-x-4 gap-y-3">
        {/* Note: Consider refactor for not using index as key */}
        {COLUMNS.map((column, i) => (
          <div key={i}>
            <p className="font-normal text-xs tracking-tightest text-primary">{column}</p>
          </div>
        ))}

        {data.map((data) => {
          const { id, covered, preferred_name, is_subscriber, insurance, insurance_id } = data;
          return (
            <React.Fragment key={id}>
              <input type="checkbox" checked={covered} onChange={() => updateCovered(id, !covered)} className="w-[18px] h-[18px] text-turquoise m-auto border-2 border-grayPrimary rounded-sm focus:ring-turquoise focus:outline-turquoise" />
              <div className="flex justify-start items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>
                <p className="space-x-2 text-sm font-normal tracking-tightest text-primary">
                  <span>{getFullName(data)}</span>
                  {preferred_name && <span className="text-grayPrimary">({preferred_name})</span>}
                </p>
              </div>
              <input type="radio" checked={is_subscriber} onChange={() => updateSubscriber(id)} className="w-[18px] h-[18px] m-auto text-turquoise border-2 border-grayPrimary focus:ring-turquoise focus:outline-turquoise" />
              <select id="insurance" name="insurance" value={insurance || ""} onChange={(e) => updateInsuranceType(id, (e.target.value as Data['insurance']) || null)} className="w-full p-3 bg-white border border-[#EFF1F5] rounded-md shadow-minimal focus:ring-turquoise focus:outline-turquoise">
                <option value=""></option>
                <option value="primary">Primary</option>
                <option value="secondary">Secondary</option>
              </select>
              <input type="text" placeholder="Ins. ID/SSN" value={insurance_id || ''} onChange={(e) => updateInsuranceId(id, e.target.value)} className="w-full p-3 border border-[#EFF1F5] rounded-md shadow-minimal focus:ring-turquoise focus:outline-turquoise" />
            </React.Fragment>
          )
        })}
      </section>

      <div className="flex w-full justify-end">
        <button onClick={() => addNewMember()} className="font-normal text-turquoise text-sm tracking-tightest">+Add new member</button>
      </div>
    </div>
  )
}

function getFullName(data: Data) {
  return `${data.first_name} ${data.last_name}`
}
