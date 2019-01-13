import { Parts } from "../_models/parts";
import { Appointment } from "../_models/appointment";
import { ServiceOrderItem } from "../_models/serviceOrderItem";
import { PARTSLIST } from "./mock-part";

export const ServiceOrderItems: ServiceOrderItem[] = [
	{
        parts: PARTSLIST[0],
    },
    {
        parts: PARTSLIST[1],
    },
    {
        parts: PARTSLIST[2],
    },
];