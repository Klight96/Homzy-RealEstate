import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
  // bring the data
  const resData = [
    {
      _id: { $oid: "64392d39dfd90fb29e464fb7" },
      title: "Sunny Meadow Cottage",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 6000,
      address: "Street 1",
      city: "Chicago",
      country: "US",
      image:
        "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      userEmail: "mukhtarhamza2394@gmail.com",
      createdAt: { $date: "2023-04-14T10:38:48.762Z" },
      updatedAt: { $date: "2023-04-14T10:38:48.762Z" },
      facilities: { bathrooms: "2", parking: "1", bedrooms: "5" },
    },
    {
      _id: { $oid: "64392e0bdfd90fb29e464fbc" },
      title: "Coastal Breeze Villa",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 8000,
      address: "Street 2",
      city: "Multan",
      country: "Pakistan",
      image:
        "https://3.bp.blogspot.com/-84l-BoUL090/VTDHcQzSTNI/AAAAAAAAuHI/Khftta_CF5E/s1920/wow-home-design.jpg",
      facilities: { bathrooms: "5", parking: "1", bedrooms: "4" },
      userEmail: "mukhtarha5mza294@gmail.com",
      createdAt: { $date: "2023-04-14T10:42:19.231Z" },
      updatedAt: { $date: "2023-04-14T10:42:19.231Z" },
    },
    {
      _id: { $oid: "6439001c74446601d6fce96d" },
      title: "Citralan Puri Serang",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 3000,
      address: "Street 3",
      city: "California",
      country: "US",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      userEmail: "mukh2tarhamza294@gmail.com",
      createdAt: { $date: "2023-04-14T07:26:20.051Z" },
      updatedAt: { $date: "2023-04-14T07:26:20.051Z" },
      facilities: { bathrooms: "3", parking: "1", bedrooms: "2" },
    },
    {
      _id: { $oid: "64392e1edfd90fb29e464fbd" },
      title: "Autumn Mist Cottage",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 3800,
      address: "Street 4",
      city: "Karachi",
      country: "Pakistan",
      image:
        "https://e0.pxfuel.com/wallpapers/12/377/desktop-wallpaper-beautiful-houses-beautiful-mansion.jpg",
      facilities: { bathrooms: "2", parking: "1", bedrooms: "3" },
      userEmail: "mukhtarh8amza294@gmail.com",
      createdAt: { $date: "2023-04-14T10:42:37.946Z" },
      updatedAt: { $date: "2023-04-14T10:42:37.946Z" },
    },
    {
      _id: { $oid: "64392d67dfd90fb29e464fb8" },
      title: "Rustic Pine Lodge",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 7050,
      address: "Street 5",
      city: "San Diego",
      country: "US",
      image: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg",
      userEmail: "mukhtar2hamza294@gmail.com",
      createdAt: { $date: "2023-04-14T10:39:35.044Z" },
      updatedAt: { $date: "2023-04-14T10:39:35.044Z" },
      facilities: { bathrooms: "5", parking: "1", bedrooms: "4" },
    },
    {
      _id: { $oid: "64392df2dfd90fb29e464fbb" },
      title: "Rolling Hills Retreat",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain inthe 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 2000,
      address: "Street 6",
      city: "Phoenix",
      country: "US",
      image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/image_h_01-H-2023.jpg",
      facilities: { bathrooms: "7", parking: "2", bedrooms: "10" },
      userEmail: "mukh1tarhamza294@gmail.com",
      createdAt: { $date: "2023-04-14T10:41:54.156Z" },
      updatedAt: { $date: "2023-04-14T10:41:54.156Z" },
    },
    {
      _id: { $oid: "64392e32dfd90fb29e464fbe" },
      title: "Riverstone Manor",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 2000,
      address: "Street 7",
      city: "Tampa",
      country: "US",
      image:
        "https://st.hzcdn.com/simgs/pictures/exteriors/builders-in-kochi-creo-homes-pvt-ltd-img~a751d25e0d2ef808_4-0254-1-cb5c87b.jpg",
      facilities: { bathrooms: "5", parking: "1", bedrooms: "4" },
      userEmail: "mukht2arhamzza294@gmail.com",
      createdAt: { $date: "2023-04-14T10:42:58.826Z" },
      updatedAt: { $date: "2023-04-14T10:42:58.826Z" },
    },
    {
      _id: { $oid: "64392e46dfd90fb29e464fbf" },
      title: "Summerhill Estate",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 2000,
      address: "Street 8",
      city: "Denver",
      country: "US",
      image:
        "https://i.pinimg.com/originals/89/56/5c/89565c305737e1da2a1a5b62600fbcd4.jpg",
      facilities: { bathrooms: "2", parking: "1", bedrooms: "2" },
      userEmail: "mukhtaarha244mza294@gmail.com",
      createdAt: { $date: "2023-04-14T10:43:18.186Z" },
      updatedAt: { $date: "2023-04-14T10:43:18.186Z" },
    },
    {
      _id: { $oid: "64392e57dfd90fb29e464fc0" },
      title: "Crimson Peak Chalet",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 2000,
      address: "Street 9",
      city: "Chicago",
      country: "US",
      image: "https://cutewallpaper.org/24/house-images/1819611997.jpg",
      facilities: { bathrooms: "3", parking: "1", bedrooms: "4" },
      userEmail: "mukhta346rhamza294@gmail.com",
      createdAt: { $date: "2023-04-14T10:43:35.761Z" },
      updatedAt: { $date: "2023-04-14T10:43:35.761Z" },
    },
    {
      _id: { $oid: "64392e69dfd90fb29e464fc1" },
      title: "Cedar Ridge Ranch",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 2000,
      address: "Street 10",
      city: " New York",
      country: "US",
      image:
        "https://media.istockphoto.com/id/1184625380/photo/large-modern-expensive-home.jpg?s=612x612&w=0&k=20&c=TuX7dnAQvrxt02_BMnlgtVMMdvBLmh3gcXL1bPnobP8=",
      facilities: { bathrooms: "5", parking: "1", bedrooms: "4" },
      userEmail: "mukht3412345678arhamza294@gmail.com",
      createdAt: { $date: "2023-04-14T10:43:53.665Z" },
      updatedAt: { $date: "2023-04-14T10:43:53.665Z" },
    },
    {
      _id: { $oid: "643a30b60c4348510952923a" },
      title: "Modern Marvel Mansion",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 2000,
      address: "Street 11",
      city: "Multan",
      country: "Pakistan",
      image:
        "https://www.homedecorbuzz.com/wp-content/uploads/2017/07/Beautiful-pink-kitchen-design-image.jpg",
      facilities: { bathrooms: "5", parking: "1", bedrooms: "4" },
      userEmail: "mukht367arhamza294@gmail.com",
      createdAt: { $date: "2023-04-15T05:05:58.189Z" },
      updatedAt: { $date: "2023-04-15T05:05:58.189Z" },
    },
    {
      _id: { $oid: "643900fa74446601d6fce96e" },
      title: "Whispering Willow Estate",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 4000,
      address: "Street 12",
      city: "Tokyo",
      country: "Japan",
      image:
        "https://images.pexels.com/photos/1127119/pexels-photo-1127119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      userEmail: "mukht9876arhamza294@gmail.com",
      createdAt: { $date: "2023-04-14T07:29:58.262Z" },
      updatedAt: { $date: "2023-04-14T07:29:58.262Z" },
      facilities: { bathrooms: "4", parking: "1", bedrooms: "4" },
    },
    {
      _id: { $oid: "6439011d74446601d6fce96f" },
      title: "Blue Horizon Manor",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 2500,
      address: "Street 13",
      city: "Delhi",
      country: "India",
      image:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      userEmail: "mukhtarhamza294@gmail.com",
      createdAt: { $date: "2023-04-14T07:30:36.761Z" },
      updatedAt: { $date: "2023-04-14T07:30:36.761Z" },
      facilities: { bathrooms: "2", parking: "1", bedrooms: "3" },
    },
    {
      _id: { $oid: "64392ddddfd90fb29e464fba" },
      title: "Golden Fields Ranch",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 4000,
      address: "Street 14",
      city: "Los Angeles",
      country: "US",
      image:
        "https://lovehomedesigns.com/wp-content/uploads/2022/01/cute-house-012522.jpg",
      facilities: { bathrooms: "5", parking: "1", bedrooms: "4" },
      userEmail: "mukhta987rhamza294@gmail.com",
      createdAt: { $date: "2023-04-14T10:41:32.998Z" },
      updatedAt: { $date: "2023-04-14T10:41:32.998Z" },
    },
    {
      _id: { $oid: "6438ffdd74446601d6fce96c" },
      title: "Asatti Garden City",
      description:
        "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
      price: 2000,
      address: "Street 15",
      city: " New York",
      country: "US",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1%201x,%20https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2%202x",
      userEmail: "mukhtar987hamza294@gmail.com",
      createdAt: { $date: "2023-04-14T07:25:13.156Z" },
      updatedAt: { $date: "2023-04-14T07:25:13.156Z" },
      facilities: { bathrooms: "2", parking: "2", bedrooms: "10" },
    },
    {
      _id: { $oid: "645cd0d8616ffb7ce699bb8e" },
      title: "Jansheen villan",
      description:
        "Villa is a marvelous piece of luxury and Art. Decorated with two helipads, wide compartment, long sea view and astonishing paints make it more bold.",
      price: 8000,
      address: "Street 16",
      city: "Lahore",
      country: "Pakistan",
      image:
        "https://res.cloudinary.com/dkg6ajfen/image/upload/v1683804284/jlap7xq7owdsfb4tlsyt.png",
      facilities: { bedrooms: 12, parkings: 2, bathrooms: 3 },
      userEmail: "ahmadrao925@gmail.com",
      createdAt: { $date: "2023-05-11T11:26:15.44Z" },
      updatedAt: { $date: "2023-05-11T11:26:15.44Z" },
    },
    {
      _id: { $oid: "645e27938b90ba42adbed599" },
      title: "The Johnson Palace",
      description:
        "This is an amazing place to live with all facilities around you",
      price: 5000,
      address: "Street 17",
      city: "New York",
      country: "United States",
      image:
        "https://res.cloudinary.com/dkg6ajfen/image/upload/v1683892030/eb99xugad9w3pswx7h3f.jpg",
      facilities: { bedrooms: 2, parkings: 3, bathrooms: 2 },
      userEmail: "zain@gaintime.io",
      createdAt: { $date: "2023-05-12T11:48:35.028Z" },
      updatedAt: { $date: "2023-05-12T11:48:35.028Z" },
    },
    {
      _id: { $oid: "6460802e05fa5b3fd0527f65" },
      title: "ZKC Villa ",
      description: "Its an amazing house to live",
      price: 5000,
      address: "Street 18",
      city: "Delhi",
      country: "India",
      image:
        "https://res.cloudinary.com/dkg6ajfen/image/upload/v1684045778/zdc3pb1d0kgfwxuk8hch.jpg",
      facilities: { bedrooms: 5, parkings: 2, bathrooms: 3 },
      userEmail: "ahmadrao925@gmail.com",
      createdAt: { $date: "2023-05-14T06:31:09.883Z" },
      updatedAt: { $date: "2023-05-14T06:31:09.883Z" },
    },
    {
      _id: { $oid: "648a1ed5d52203e45f037608" },
      title: "Beautiful House",
      description: "This is a good home to live",
      price: 10000,
      address: "Street 19",
      city: "Mumbai",
      country: "India",
      image:
        "https://res.cloudinary.com/dkg6ajfen/image/upload/v1686773421/ihdmmu9mjsors2rvlu4j.png",
      facilities: { bedrooms: 5, parkings: 5, bathrooms: 8 },
      userEmail: "zain@gaintime.io",
      createdAt: { $date: "2023-06-14T20:11:01.081Z" },
      updatedAt: { $date: "2023-06-14T20:11:01.081Z" },
    },
  ];
  //loop thriugh the array
  resData.map(async (resident) => {
    console.log(resident._id);
    try {
      const residency = await prisma.residency.create({
        data: {

          title:resident.title,
          description:resident.description,
          price:resident.price,
          address:resident.address,
          country:resident.country,
          city:resident.city,
          facilities:resident.facilities,
          image:resident.image,
          owner: { create: { email: resident.userEmail } },
        },
      });
      res.send(data)
    } catch (error) {
      console.log(error)
    }
  });

  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({ message: "Residency created successfully", residency });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A residency with address already there");
    }
    throw new Error(err.message);
  }
});

// function to get all the documents/residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log(error)
  res.send(residencies);
});

// function to get a specific document/residency
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id },
    });
    res.send(residency);
  } catch (err) {
    throw new Error(err.message);
  }
});
