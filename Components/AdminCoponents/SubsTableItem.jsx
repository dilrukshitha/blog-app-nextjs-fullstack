import React from 'react'

function SubsTableItem({email,mongoId,date,deleteEmail}) {
  return (
    <tr className='bg-white border-b text-left'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        {email?email:"No email"}
      </th>
      <td className='hidden sm:block px-6 py-4'>{new Date(date).toDateString()}</td>
      <td className='px-6 py-4 cursor-pointer' onClick={()=>{
        deleteEmail(mongoId)
      }}>x</td>
    </tr>
  )
}

export default SubsTableItem
