import { useEffect, useState } from "react";
import SearchBar from "../components/home/SearchBar";
import JobCard from "../components/home/JobCard";
import { dummyJobPostings } from "../lib/dynamicData";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase.config";

const Home = () => {
	const [jobs, setJobs] = useState([]);

	const fetchJobs = async () => {
		try {
			const tempJobs = [];
			const jobsRef = query(collection(db, "jobs"));
			const q = query(jobsRef, orderBy("postedOn", "desc"));
			const querySnapshot = await getDocs(q);

			querySnapshot.forEach((doc) => {
				tempJobs.push({
					...doc.data(),
					id: doc.id,
					postedOn: doc.data().postedOn.toDate(),
				});
			});

			setJobs(tempJobs);
		} catch (error) {
			console.error("Error fetching jobs:", error);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	return (
		<>
			<section className="home">
				<SearchBar />
				{jobs.map((post) => {
					return <JobCard key={post.id} {...post} />;
				})}
			</section>
		</>
	);
};

export default Home;
