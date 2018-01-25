/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/21
 * Time: 20:55
 */

import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar",{ length:100 })
    name : string;

    @Column("text")
    description : string;

    @Column("varchar")
    fileName : string;

    @Column("double")
    views : number;

    @Column("tinyint")
    isPublished : boolean;

    @Column("tinyint")
    new_item : boolean;
}