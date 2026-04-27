import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState } from "react";

export const jobCredentials = [
	{
		key: "jobRole",
		title: "Job Role",
		options: [
			"IOS Developer",
			"Front-End Developer",
			"Back-End Developer",
			"Android Developer",
			"Developer Advocate",
		],
	},
	{
		key: "jobType",
		title: "Job Type",
		options: ["Full Time", "Part Time", "Contract"],
	},
	{
		key: "location",
		title: "Location",
		options: ["Remote", "In-Office", "Hybrid"],
	},
	{
		key: "experience",
		title: "Experience",
		options: ["Fresher", "Junior Level", "Mid Level", "Senior Level"],
	},
];

const SearchBar = () => {
	const [filteredCredentials, setFilteredCredentials] = useState({
		jobRole: "",
		jobType: "",
		location: "",
		experience: "",
	});

	// a curried function
	const handleChange = (key) => (e) => {
		setFilteredCredentials((prev) => ({
			...prev,
			[key]: e.target.value,
		}));
	};

	const jobCredentialsMapper = jobCredentials.map((item) => {
		return (
			<Box sx={{ minWidth: 256 }} key={item.key}>
				<FormControl
					fullWidth
					className="py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
				>
					<InputLabel id={`${item.key}-label`}>
						<p className="font-bold bg-zinc-200 px-2 rounded-t-md">
							{item.title}
						</p>
					</InputLabel>

					<Select
						labelId={`${item.key}-label`}
						id={`${item.key}-select`}
						value={filteredCredentials[item.key]}
						label={item.title}
						onChange={handleChange(item.key)}
					>
						{item.options.map((option) => (
							<MenuItem value={option} key={option}>
								{option}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		);
	});

	return (
		<section className="flex gap-4 mt-10 mb-5 justify-center px-10">
			{jobCredentialsMapper}
			<Button variant="contained" className="w-64 font-bold">
				Search
			</Button>
		</section>
	);
};

export default SearchBar;
