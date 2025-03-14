import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuCard from "./MenuCard";

const categories = [
    "Pizza",
    "Biryani",
    "Burger",
    "Chicken",
    "Rice",
    "Dosa",
    "Noodles"
]

const foodTypes = [
    {
        label: "All", value: "all"
    },

    {
        label: "Vegetarian", value: "vegetarian"
    },

    {
        label: "Non-Vegetarian", value: "non_vegetarian"
    },

    {
        label: "Seasonal", value: "seasonal"
    }
];
const menu = [1, 1, 1, 1, 1, 1]
const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all")

    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name)

    }
    return (
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/India/Indian Fast Food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_1280.jpg" alt="" />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2016/11/21/16/02/outdoor-dining-1846137_640.jpg" alt="" />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2020/01/31/07/26/chef-4807317_640.jpg" alt="" />
                        </Grid>
                    </Grid>
                </div>
                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
                    <p className="text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt natus accusamus quos amet? Sit doloremque dignissimos perferendis ab ipsa? A, provident incidunt. Sit rem voluptas voluptate vero dolores ullam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deserunt natus accusamus quos amet? Sit doloremque dignissimos perferendis ab ipsa? A, provident incidunt. Sit rem voluptas voluptate vero dolores ullam!</p>
                    <div className="space-y-3 mt-3">
                        <p className="text-gray-500 flex items-center gap-3">
                            <LocationOnIcon />
                            <span>
                                Pune,Maharashtra.
                            </span>
                        </p>
                        <p className="text-gray-500 flex items-center gap-3">
                            <ScheduleIcon />
                            <span>
                                Mon-Sun: 9.00 AM to 9.00 PM (Today)
                            </span>
                        </p>
                    </div>

                </div>
            </section>

            <Divider />

            <section className="pt-[2rem] lg:flex relative">

                <div className="space-y-10 lg:w-[20%] filterm" >
                    <div className="box space-y-5 lg:sticky top-28">
                        <div>
                            <Typography varient="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Type
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {foodTypes.map((item) =>
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio />}
                                            label={item.label} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography varient="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {categories.map((item) =>
                                        <FormControlLabel
                                            key={item}
                                            value={item}
                                            control={<Radio />}
                                            label={item} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="space-y-5 lg:w-[80%] filter lg:pl-10">
                    {menu.map((item) => <MenuCard />)}
                </div>

            </section>

        </div>
    )
}

export default RestaurantDetails