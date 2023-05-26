// use local storage to manage cart data
const addToDb = (job) => {
    const appliedJobs = getAppliedJobs();

    const exist = appliedJobs.find(appliedJob => appliedJob.id === job.id)

    if(!exist){
        const newJob = {
            id: job.id,
            jobTitle: job.jobTitle
        }

        appliedJobs.push(newJob)
    }

    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

const getRealAppliedJobs = (jobs) => {
    const storedAppliedJobs = getAppliedJobs()
    const appliedJobs = []

    for (const storedJob of storedAppliedJobs) {
        const exist = jobs.find(job=> job.id === storedJob.id)
        appliedJobs.push(exist)
    }

    return appliedJobs

}

const getAppliedJobs = () => {
    let appliedJobs = [];

    //get the shopping cart from local storage
    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

export {
    addToDb,
    getAppliedJobs,
    getRealAppliedJobs,
}
