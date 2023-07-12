const pool = require('./../connection')

const izin = async () => {
    const client = await pool.connect()
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS izin (
                id_izin SERIAL PRIMARY KEY,
                NRP VARCHAR(30) REFERENCES "user" (NRP),
                jenis_izin VARCHAR(10),
                bukti_izin VARCHAR(255),
                stts_izin VARCHAR(30),
                tanggal DATE
            );
        `
        await client.query(query)
        console.log('Table berhasil dibuat')
    } catch (error) {
        console.error(error)
    } finally {
        client.release()
    }
}

izin()