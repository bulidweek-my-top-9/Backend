const request = require('supertest'); 

const server = require('./server.js');


describe('server', () => {
  describe("GET /", () => {
  //   it("should return 200", () => {
  //     return request(server)
  //     .get("/api/jokes")
  //     .then(res => {
  //       expect(res.status).toBe(200);
  //     })
  //   })

    it("should return json", () => {
      return request(server)
      .get("/api/music")
      .then(res => { 
        expect(res.type).toMatch(/json/);
        //expect(res.status).toBe(200);
      })
    })

    
    it("should return json", () => {
      return request(server)
      .get("/api/movies")
      .then(res => { 
        expect(res.type).toMatch(/json/);
        //expect(res.status).toBe(200);
      })
    })

  })

// describe("post /", () => {
//   it("should return json", () => {
//     return request(server)
//     .get("/api/login")
//     .then(res => {
//       expect(res.type).toMatch(/text/);
//     })
//   })
// }) 

})