import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
	slug: "products",
	admin: {
		useAsTitle: "name",
	},
	access: {},
	fields: [
		{
			name: "user",
			type: "relationship",
			relationTo: "users",
			required: true,
			hasMany: false,
			admin: {
				condition: () => false,
			},
		},
		{
			name: "name",
			label: "Name",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "textarea",
			label: "Product Details",
		},
		{
			name: "price",
			label: "Price as USD",
			min: 0,
			max: 1000,
			type: "number",
			required: true,
		},
		{
			name: "category",
			label: "Category",
			type: "select",
			options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
			required: true,
		},
		{
			name: "product_files",
			label: "Product File(s)",
			type: "relationship",
			required: true,
			relationTo: "product_files",
			hasMany: false,
		},
		{
			name: "approveforSale",
			label: "Product Status",
			type: "select",
			defaultValue: "pending",
			access: {
				create: ({ req }) => req.user.role === "admin",
				read: ({ req }) => req.user.role === "admin",
				update: ({ req }) => req.user.role === "admin",
			},
			options: [
				{
					label: "Pending Verification",
					value: "pending",
				},
				{
					label: "Approved",
					value: "approved",
				},
				{
					label: " Denied ",
					value: " denied ",
				},
			],
		},
		{
			name: "priceId",
			access: {
				create: () => false,
				read: () => false,
				update: () => false,
			},
			type: "text",
			admin: {
				hidden: true,
			},
		},
		{
			name: "stripeId",
			access: {
				create: () => false,
				read: () => false,
				update: () => false,
			},
			type: "text",
			admin: {
				hidden: true,
			},
		},
		{
			name: "images",
			type: "array",
			label: "Product Images",
			minRows: 1,
			maxRows: 4,
			required: true,
			labels: {
				singular: "Iamge",
				plural: "Images",
			},
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
			],
		},
	],
};
