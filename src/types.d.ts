export type TrackingInfoProps = {
    trackingNumber: string,
    postcode: string
}

export type SendDropdownProps = {
    selected: string, /* TO DO didn't work "Select Area" | "UK Mainland" | "Northern Ireland" */
    changeSelected: React.Dispatch<React.SetStateAction<string>>
}