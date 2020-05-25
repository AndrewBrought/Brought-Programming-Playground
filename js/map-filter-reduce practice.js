

// ECMA6 IIFE (()=>{})();
(function(){

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];


    let experienced = users.filter((user) => user.languages.length >= 3);
    console.log(experienced);

    // let experiencedUsers = users.filter((user) => user.languages.length >= 3);
    // console.log(experiencedUsers);

    //David's Solution:
    //     let threeLangs = users.filter(( user )=> user.languages.length > 2);
    //     console.log(threeLangs);
    //    ==================

    let email = users.map((user) => user.email);
    console.log(email);


    // let usersEmail = users.map((user) => `<li>${user.email}</li>`);
    // console.log(usersEmail);

    //David's Solution:
    //   const userEmails = users.map((user => {
    //   return user.email;
    //   });
//     ================

    let total = users.reduce((sum, user) => sum + user.yearsOfExperience, 0);
    console.log(total);

    let average = total / users.length;
    console.log(average)

// let favoriteSum = favoriteNumbers.reduce((sum, num) => sum + num, 0);
//     let totalYears = users.reduce((sum, user) => sum + user.yearsOfExperience, 0);
//     console.log(totalYears);
//
//     let averageYears = totalYears / users.length;
//     console.log(averageYears);

// Class Solution
//      const totalExp = users.reduce((total, user) => {
//       return total + user.yearsOfExperience;
//      })
//      const averageExp = totalExp/users.length;
//      console.log(averageExp);
    // ================================
let long = users.reduce((longest, user) =>
    longest.email.length > user.email.length ? longest : user
, {email: 0});
    console.log(long.email.length);

    // let longestEmail = users.reduce((longest, user) =>
    //         longest.email.length > user.email.length ? longest : user
    //     , {email: 0});
    // console.log(longestEmail.email);


    //Class Solution :
    //     let longEmail = users.reduce((longEmail, user) => {
    //      if(longEmail.length > user.email.length){
    //       return longEmail;
    //      } else{
    //       return user.email;
    //      }
    //     }, "");
    //     console.log(longEmail);
    //    ==================================


    // let instructorsString = users.reduce((finalString, instructor) => `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1, instructor.name.length).toLowerCase()} `, "Your instructors are: ");
    // console.log(instructorsString);

//Class Solution :
//     let instructorString =  users.reduce((fineString, inst, index) => {
//         if(index < users.length - 1){
//             return `${fineString}${inst.name.substring(0,1).toUpperCase()}${inst.name.substring(1, inst.name.length).toLowerCase()}, `
//         } else {
//             return `${fineString}${inst.name.substring(0,1).toUpperCase()}${inst.name.substring(1, inst.name.length).toLowerCase()}.`
//         }
//     })

    //So, what we did here was use conditional logic to return the names with comma's and then when we get to the final name, it ends with a period.

// ====BONUS ======
//     let totalLanguages = users.reduce((sum, user) => sum + user.languages + ",", "");
//     console.log("total Languages: " + totalLanguages);
//
//
//     let newTL=totalLanguages.substring(0, totalLanguages.length-1).split(",");
//     console.log(newTL);
//     var unique = newTL.filter((v, i, a) => a.indexOf(v) === i);
//     console.log(unique);


    //Class solution:
    // let uniqueLangs = users.map(user => user.languages).map(language => language.split(",")).join(",").join(",").split(",").sort().reduce((langList, lang) => {
    //  const length = langlist.length;
    //  if(length === 0 || langlist[length - 1] !== lang){
    //   langlist.push(lang);
    //  }
    //  return langlist;
    // }, []);

    // let uniqueLangs = users.reduce((langlist, user) => {
    //     for (let lang of user.languages){
    //         if(!langlist.includes(lang)) {
    //             langlist.push(lang);
    //         }
    //     }
    //     return langlist;
    // }, []);
    // console.log(uniqueLangs);


    // let arr = users.reduce((langs, user) => {
    //     for (let lang of user.languages){
    //         langs.push(lang);
    //     }
    //     return langs;
    // }, []);
    // let set = new Set(arr);
    // let uniqueLangsQuick = Array.from(set);
    //








})();