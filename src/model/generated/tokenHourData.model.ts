import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, DateTimeColumn as DateTimeColumn_, StringColumn as StringColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_, FloatColumn as FloatColumn_, IntColumn as IntColumn_} from "@subsquid/typeorm-store"
import {Token} from "./token.model"

@Entity_()
export class TokenHourData {
    constructor(props?: Partial<TokenHourData>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @DateTimeColumn_({nullable: false})
    date!: Date

    @StringColumn_({nullable: false})
    tokenId!: string

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token

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
