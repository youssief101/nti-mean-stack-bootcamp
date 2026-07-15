use sample_mflix;

show collections;

db.movies.find();

// using the sample_mflix database accessing the movies collection filter to movies that have 
// directors listed (excluding documents where the directors field is null or empty): "NOTE: list the directors only!"
db.movies.aggregate([
    {
        $match: {
            directors: {
                $exists: true,
                $ne: null,
                $not: {$size: 0}
            }
        }
    },
    {
        $project: {
            _id: 0,
            directors: 1
        }
    }
]);

db.movies.aggregate([
    {
        $match: {
            directors: {
                $exists: true,
                $ne: null,
                $not: {$size: 0}
            }
        }
    },
    {
        $unwind: "$directors"
    }
]);