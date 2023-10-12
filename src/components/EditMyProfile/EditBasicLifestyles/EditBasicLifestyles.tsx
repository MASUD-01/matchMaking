// import React from 'react';
// import EditBasicLifestyleSelect from './AntDesignCom/EditBasicLifestyleSelect';
// import GenderSelect from './AntDesignCom/GenderSelect';
// import EditDatePicker from './AntDesignCom/EditDatePicker';
// import { Select } from 'antd';
// import EditDeit from './AntDesignCom/EditDeit';
// const handleChange = (value: { value: string; label: React.ReactNode }) => {
//   console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
// };

// const EditBasicLifestyles = () => {
//   return (
//     <div>
//       <div>
//         <div className='flex flex-col'>
//           {/* #1 */}
//           <div className='flex gap-x-12 items-center py-3 '>
//             <span>Profile created by </span>
//             {/* <div> */}
//             <span> : </span>
//             <span>
//               <EditBasicLifestyleSelect />
//             </span>
//             {/* </div> */}
//           </div>
//           {/* #2 */}
//           <div className='flex gap-x-24 items-center py-3 '>
//             <span>Gender </span>
//             <span> : </span>
//             <span>
//               <GenderSelect />
//             </span>
//           </div>
//           {/* #3 */}
//           <div className='flex gap-5 items-center py-3'>
//             <span>Date of Birth </span>
//             <span> : </span>
//             <span>
//               {' '}
//               <EditDatePicker />
//             </span>
//           </div>
//           {/* #4 */}
//           <div className='flex gap-5 items-center py-3'>
//             <span>Marital status </span>
//             <span> : </span>
//             <span>
//               <Select
//                 labelInValue
//                 defaultValue={{ value: '', label: 'Select' }}
//                 style={{ width: 120 }}
//                 onChange={handleChange}
//                 options={[
//                   {
//                     value: 'Never Married',
//                     label: 'Never Married',
//                   },
//                   {
//                     value: 'Divorced',
//                     label: 'Divorced',
//                   },
//                   {
//                     value: '5ft 9in -(175cm)',
//                     label: '5ft 9in -(175cm)',
//                   },
//                 ]}
//               />
//             </span>
//           </div>
//           {/* #5 */}
//           <div className='flex gap-5 items-center py-3'>
//             <span>Height </span>
//             <span> : </span>
//             <span>
//               <Select
//                 labelInValue
//                 defaultValue={{ value: '', label: 'Select' }}
//                 style={{ width: 120 }}
//                 onChange={handleChange}
//                 options={[
//                   {
//                     value: '5ft 9in -(175cm)',
//                     label: '5ft 10in -(175cm)',
//                   },
//                   {
//                     value: '5ft 11in -(179cm)',
//                     label: '6th -(800cm)',
//                   },
//                   {
//                     value: '6ft 1in -(810cm)',
//                     label: '6ft 2in -(820cm)',
//                   },
//                 ]}
//               />
//             </span>
//           </div>
//           {/* #6 */}
//           <div className='flex gap-5 items-center py-3'>
//             <span>Health Information </span>
//             <span> : </span>
//             <span>
//               {' '}
//               <Select
//                 labelInValue
//                 defaultValue={{ value: '', label: 'Select' }}
//                 style={{ width: 120 }}
//                 onChange={handleChange}
//                 options={[
//                   {
//                     value: 'No',
//                     label: 'No',
//                   },
//                   {
//                     value: 'Yes',
//                     label: 'Yes',
//                   },
//                   {
//                     value: 'Taurus',
//                     label: 'Taurus',
//                   },
//                   {
//                     value: 'Gemini',
//                     label: 'Gemini',
//                   },
//                   {
//                     value: 'Cancer',
//                     label: 'Cancer',
//                   },
//                   {
//                     value: 'AGemini',
//                     label: 'AGemini',
//                   },
//                   {
//                     value: 'Virgo',
//                     label: 'Virgo',
//                   },
//                 ]}
//               />
//             </span>
//           </div>
//           {/* #7 */}
//           <div className='flex gap-5 items-center py-3'>
//             <span>Any Disability? </span>
//             <span> : </span>
//             <span>
//               {' '}
//               <Select
//                 labelInValue
//                 defaultValue={{ value: '', label: 'Select' }}
//                 style={{ width: 120 }}
//                 onChange={handleChange}
//                 options={[
//                   {
//                     value: 'No',
//                     label: 'No',
//                   },
//                   {
//                     value: 'Yes',
//                     label: 'Yes',
//                   },
//                 ]}
//               />
//             </span>
//           </div>
//           {/* #8 */}
//           <div className='flex gap-5 items-center py-3'>
//             <span>Blood Group </span>
//             <span> : </span>
//             <span>
//               <Select
//                 labelInValue
//                 defaultValue={{ value: '', label: 'Select' }}
//                 style={{ width: 120 }}
//                 onChange={handleChange}
//                 options={[
//                   {
//                     value: "Don't know",
//                     label: "Don't know",
//                   },
//                   {
//                     value: 'Aries',
//                     label: 'Aries',
//                   },
//                   {
//                     value: 'Taurus',
//                     label: 'Taurus',
//                   },
//                   {
//                     value: 'Gemini',
//                     label: 'Gemini',
//                   },
//                   {
//                     value: 'Cancer',
//                     label: 'Cancer',
//                   },
//                   {
//                     value: 'AGemini',
//                     label: 'AGemini',
//                   },
//                   {
//                     value: 'Virgo',
//                     label: 'Virgo',
//                   },
//                   {
//                     value: 'Libra',
//                     label: 'Libra',
//                   },
//                   {
//                     value: 'Scorpio',
//                     label: 'Scorpio',
//                   },
//                 ]}
//               />
//             </span>
//           </div>

//           {/* #10 */}
//           <div className='flex gap-5 items-center py-3'>
//             <span>Sun Sign </span>
//             <span> : </span>
//             <span>
//               {' '}
//               <Select
//                 labelInValue
//                 defaultValue={{ value: '', label: 'Select' }}
//                 style={{ width: 120 }}
//                 onChange={handleChange}
//                 options={[
//                   {
//                     value: "Don't know",
//                     label: "Don't know",
//                   },
//                   {
//                     value: 'Aries',
//                     label: 'Aries',
//                   },
//                   {
//                     value: 'Taurus',
//                     label: 'Taurus',
//                   },
//                   {
//                     value: 'Gemini',
//                     label: 'Gemini',
//                   },
//                   {
//                     value: 'Cancer',
//                     label: 'Cancer',
//                   },
//                   {
//                     value: 'Leo ',
//                     label: 'Leo ',
//                   },
//                   {
//                     value: 'Virgo',
//                     label: 'Virgo',
//                   },
//                   {
//                     value: 'Libra',
//                     label: 'Libra',
//                   },
//                   {
//                     value: 'Scorpio',
//                     label: 'Scorpio',
//                   },
//                 ]}
//               />
//             </span>
//           </div>

//           {/* #12 */}
//           <div className='flex gap-5 items-center py-3'>
//             <span>Diet </span>
//             <span> : </span>
//             <span>
//               <EditDeit />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditBasicLifestyles;
