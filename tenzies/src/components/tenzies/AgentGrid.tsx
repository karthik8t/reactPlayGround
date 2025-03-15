'use client';

import {Agent, Button} from "@/components/ui/button";
import {AgentTile, Player, PlayerType} from "@/lib/Models";


type Props = {
    attacker: Player,
    defender: Player,
    currentPlayer: PlayerType,
    lockTile: any
};
export default function AgentGrid({attacker, defender, currentPlayer, lockTile}: Props) {
    const player = currentPlayer === 'attack' ? attacker : defender;
    console.log(player)

    return (
        <div className={"flex flex-col items-center"}>
            <div className={"grid grid-cols-5 gap-2 w-max p-3 bg-[#ecfffe20]"}>
            {player.tiles.map((tile: AgentTile) => {
                return (<Button size={"agent"}
                                agent= {tile.agent as unknown as Agent}
                                key={tile.uniqueId}
                                tile={tile.isLocked?"locked" :"default"}
                                onClick={() => lockTile(tile.uniqueId, tile.agent)}></Button>)
            })}
            </div>
        </div>
    )
};
