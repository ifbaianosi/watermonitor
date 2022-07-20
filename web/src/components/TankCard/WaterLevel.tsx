interface WaterLevelProps {
    level: string;
}

export function WaterLevel({ level }: WaterLevelProps) {
    return(
        <h1>{level}</h1>
    )
}