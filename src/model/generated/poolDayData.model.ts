import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_, IntColumn as IntColumn_, FloatColumn as FloatColumn_} from "@subsquid/typeorm-store"
import {Pool} from "./pool.model"

@Entity_()
export class PoolDayData {
    constructor(props?: Partial<PoolDayData>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @DateTimeColumn_({nullable: false})
    date!: Date

    @StringColumn_({nullable: false})
    poolId!: string

    @Index_()
    @ManyToOne_(() => Pool, {nullable: true})
    pool!: Pool

    @BigIntColumn_({nullable: false})
    liquidity!: bigint

    @BigIntColumn_({nullable: false})
    sqrtPrice!: bigint

    @IntColumn_({nullable: false})
    tick!: number

    @BigIntColumn_({nullable: false})
    volumeToken0!: bigint

    @StringColumn_({nullable: false})
    volumeToken0D!: string

    @BigIntColumn_({nullable: false})
    volumeToken1!: bigint

    @StringColumn_({nullable: false})
    volumeToken1D!: string

    @FloatColumn_({nullable: true})
    volumeUSD!: number | undefined | null

    @FloatColumn_({nullable: false})
    volumePercentageChange!: number

    @BigIntColumn_({nullable: false})
    collectedFeesToken0!: bigint

    @BigIntColumn_({nullable: false})
    collectedFeesToken1!: bigint

    @FloatColumn_({nullable: true})
    collectedFeesUSD!: number | undefined | null

    @BigIntColumn_({nullable: false})
    swapCount!: bigint

    @FloatColumn_({nullable: true})
    open!: number | undefined | null

    @FloatColumn_({nullable: true})
    high!: number | undefined | null

    @FloatColumn_({nullable: true})
    low!: number | undefined | null

    @FloatColumn_({nullable: true})
    close!: number | undefined | null

    @IntColumn_({nullable: false})
    chainId!: number
}
